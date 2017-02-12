import compileStyles from './styles';
import compilePages from './pages';

const compilers = {
    pages: compilePages,
    styles: compileStyles
};

export default compilers;