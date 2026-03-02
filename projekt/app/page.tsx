import { supabase } from '../utils/supabase';

export default async function Home() {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.error("Błąd pobierania danych:", error.message);
  }

  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Użytkownicy z Supabase</h1>

      {/*  */}
      {error && (
        <p className="text-red-500 mb-4 bg-red-100 p-3 rounded">
          Wystąpił błąd: {error.message}
        </p>
      )}

      {/*  */}
      {!data || data.length === 0 ? (
        <p className="text-gray-500 italic">Brak użytkowników w bazie danych.</p>
      ) : (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                {/*  */}
                <th scope="col" className="px-6 py-4">ID</th>
                <th scope="col" className="px-6 py-4">Imię</th>
                <th scope="col" className="px-6 py-4">Email</th>
                <th scope="col" className="px-6 py-4">hasło</th>
              </tr>
            </thead>
            <tbody>
              {/**/}
              {data.map((user) => (

                <tr key={user.id} className="bg-white border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {user.id}
                  </td>
                  <td className="px-6 py-4">
                    {/*  */}
                    {user.user_name || '-'}
                  </td>
                  <td className="px-6 py-4">
                    {/*  */}
                    {user.email || '-'}
                  </td>
                  <td className="px-6 py-4">
                    {/*  */}
                    {user.password || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}