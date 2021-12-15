import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS,NextJS e Styled Components
    </S.Description>
    <S.Illustratration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela de código"
    />
  </S.Wrapper>
)

export default Main