import axios from 'axios';

interface VercelDeployment {
  id: string;
  name: string;
  url: string;
  state: string;
  created: number;
  ready?: number;
}

interface VerificationResult {
  success: boolean;
  deployment?: VercelDeployment;
  error?: string;
  timestamp: string;
}

const VERCEL_TOKEN = 'u37lsKrG1jXkxGgd1lv6u4TM';
const VERCEL_API_BASE = 'https://api.vercel.com';

async function verifyVercelDeployment(): Promise<VerificationResult> {
  const timestamp = new Date().toISOString();
  
  try {
    // Fetch latest deployments
    const response = await axios.get(`${VERCEL_API_BASE}/v6/deployments`, {
      headers: {
        'Authorization': `Bearer ${VERCEL_TOKEN}`,
        'Content-Type': 'application/json'
      },
      params: {
        limit: 1,
        projectId: 'vercel-integration-test-final'
      }
    });

    if (response.data?.deployments?.length > 0) {
      const latestDeployment = response.data.deployments[0];
      
      console.log('✅ Vercel Deployment Verified!');
      console.log('━'.repeat(50));
      console.log(`📦 Deployment ID: ${latestDeployment.id}`);
      console.log(`🌐 Project: ${latestDeployment.name}`);
      console.log(`🔗 URL: https://${latestDeployment.url}`);
      console.log(`📊 State: ${latestDeployment.state}`);
      console.log(`⏰ Created: ${new Date(latestDeployment.created).toLocaleString()}`);
      console.log('━'.repeat(50));

      return {
        success: true,
        deployment: latestDeployment,
        timestamp
      };
    } else {
      console.log('⚠️  No deployments found');
      return {
        success: false,
        error: 'No deployments found',
        timestamp
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('❌ Verification Failed!');
      console.error('━'.repeat(50));
      console.error(`Status: ${error.response?.status}`);
      console.error(`Message: ${error.response?.data?.error?.message || error.message}`);
      console.error('━'.repeat(50));
      
      return {
        success: false,
        error: error.response?.data?.error?.message || error.message,
        timestamp
      };
    }
    
    console.error('❌ Unexpected Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp
    };
  }
}

async function testVercelConnection(): Promise<void> {
  console.log('\n🚀 Starting Vercel Deployment Verification...');
  console.log('━'.repeat(50));
  console.log(`🔑 Token: ${VERCEL_TOKEN.substring(0, 8)}...`);
  console.log(`⏰ Timestamp: ${new Date().toLocaleString()}`);
  console.log('━'.repeat(50));
  console.log('');

  const result = await verifyVercelDeployment();
  
  console.log('\n📋 Verification Result:');
  console.log(JSON.stringify(result, null, 2));
  
  if (result.success) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

// Run verification
testVercelConnection();