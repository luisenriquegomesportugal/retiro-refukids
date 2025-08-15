import { Page } from '../components/page';
import { useConfigService } from '../services/useConfigService';

export default function Index() {
  const { permitirInscricao } = useConfigService();

  return <Page title="Inicio">
    <div className='flex flex-col justify-center items-center gap-4 h-64'>
      <h1 className="font-bold">Retiro - Redes 7+13+16</h1>
      {
        permitirInscricao === true
          ? <a
            href='/inscritos/novo'
            className="bg-indigo-700 text-white px-3 py-2 mt-10 rounded-md text-sm font-medium">
            Novas inscrições
          </a>
          : null
      }
    </div>
  </Page>;
}
