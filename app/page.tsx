export default function Home() {
  // Debug Vercel token
  console.log('Vercel Token Debug:', {
    hasToken: !!process.env.VERCEL_TOKEN,
    tokenLength: process.env.VERCEL_TOKEN?.length || 0,
    tokenPrefix: process.env.VERCEL_TOKEN?.substring(0, 10) + '...',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('VERCEL')),
    nodeEnv: process.env.NODE_ENV
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Vercel Integration Test</h1>
        <p className="text-lg">Check the console for Vercel token debug information.</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Environment Check:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Has Token: {process.env.VERCEL_TOKEN ? '✅' : '❌'}</li>
            <li>Token Length: {process.env.VERCEL_TOKEN?.length || 0}</li>
            <li>Node Environment: {process.env.NODE_ENV}</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
