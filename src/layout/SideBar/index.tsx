import { Container, Content, Icon, Icons, Link } from "./styles";
import { FaRegFile, FaFax, FaUserAlt, FaFileImport} from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';

export function SideBar() {
  return (
   <Container>
    <Content>
     <h1>SideBar</h1>
     <Icons>
      <Icon>
        <Link to="tipo-documentos">
          <FaFax size="25"/>
          <h2>Tipo de Documentos</h2>
        </Link> 
        <Link to="">
          <FaRegFile size="25"/>
          <h2>Documentos</h2>
        </Link>
        <Link to="">
          <FaUserAlt size="25"/>
          <h2>Credores</h2>
        </Link>
        <Link to="">
          <AiOutlineFileSearch size="30"/>
          <h2>Vizualizar Documentos</h2>
        </Link>
        <Link to="">
          <FaFileImport size="25"/>
          <h2>Importador TCE</h2>
        </Link>
        <Link to="">
          <FaRegFile size="30"/>
          <h2>Importador SIM</h2>
        </Link> 
        <Link to="">
          <FaRegFile size="30"/>
          <h2>Importar Etiquetas</h2>
        </Link>
        <Link to="">
          <FaRegFile size="30"/>
          <h2>Gravar Mídia</h2>
        </Link>
        <Link to="">
          <FaRegFile size="30"/>
          <h2>Logoff</h2>
        </Link>
        <Link to="">
          <FaRegFile size="30"/>
          <h2>Operadores</h2>
        </Link>          
      </Icon>
      
     </Icons> 
    </Content> 
   </Container>
  )
}