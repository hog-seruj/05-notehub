import { FadeLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

export default function Loader() {
  return <FadeLoader color="#0d6efd" cssOverride={override} />;
}
