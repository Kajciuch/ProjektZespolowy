import { supabase } from '../utils/supabase';

export default async function Home() {
  const { data, error } = await supabase
    .from('users')
    .select('*');


  if (error) {
    console.error("Błąd pobierania danych:", error.message);
  }

  return (
    <main className="p-10">
      <h1>Moje dane z Supabase:</h1>

      {/* */}
      <pre className="mt-4 bg-gray-800 text-green-400 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}