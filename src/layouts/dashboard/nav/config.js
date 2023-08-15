// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Escalafón',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Docentes',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Facultades',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Administrativos',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Chat',
    path: '/dashboard/chatIA',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
