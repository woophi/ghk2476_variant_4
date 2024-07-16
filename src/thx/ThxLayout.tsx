import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import aLogo from '../assets/a_logo.png';
import { appSt } from '../style.css';
import { thxSt } from './style.css';
import { useTimeout } from './useTimeout';

export const ThxLayout = () => {
  useTimeout(() => window.location.replace('alfabank://longread?endpoint=v1/adviser/longreads/15892'), 5000);
  return (
    <>
      <div className={thxSt.container}>
        <img src={aLogo} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="large" defaultMargins weight="bold">
          Ещё чуть-чуть
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          И мы запустим обновленные опции Инвесткопилки! Добавляем последние штрихи, чтобы все работало идеально.
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          На данный момент вы можете открыть Инвесткопилку и настроить ее позднее.
        </Typography.Text>
      </div>
      <Gap size={128} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="alfabank://longread?endpoint=v1/adviser/longreads/15892">
          Открыть Инвесткопилку
        </ButtonMobile>
      </div>
    </>
  );
};
