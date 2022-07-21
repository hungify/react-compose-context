import { useNavigate } from 'react-router-dom';
import withRedirectIfBlank, { RedirectIfBlankProps } from '~HOC/components/withRedirectIfBlank';

function ListNumber({ data }: RedirectIfBlankProps) {
  const navigate = useNavigate();

  return (
    <ul>
      <button onClick={() => navigate('/')}>Go To Home</button>
      {data.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
}

export default withRedirectIfBlank({
  redirectCondition: ({ data }) => {
    const isArrayNumber = Array.isArray(data) && data.some((item) => typeof item !== 'number');
    return isArrayNumber;
  },
  redirectTo: '/home',
})(ListNumber);
