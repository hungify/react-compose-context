import { useNavigate } from 'react-router-dom';
import withRedirectIfBlank, { type RedirectIfBlankProps } from './withRedirectIfBlank';

const ListString = ({ data }: RedirectIfBlankProps) => {
  const navigate = useNavigate();

  return (
    <ul>
      <button onClick={() => navigate('/')}>Go To Home</button>
      {data.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default withRedirectIfBlank({
  redirectCondition: ({ data }) => {
    const isArrayNumber = Array.isArray(data) && data.some((item) => typeof item !== 'string');
    return isArrayNumber;
  },
  redirectTo: '/home',
})(ListString);
