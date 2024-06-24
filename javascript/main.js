import acessibility from './acessibility';
import cursos from './cursos';
import feedback from './feedback';
import footer from './footer';
import login from './login';

// Reexportar todas as funções e variáveis centralizando-as
export default {
    ...acessibility,
    ...cursos,
    ...feedback,
    ...footer,
    ...login,
};