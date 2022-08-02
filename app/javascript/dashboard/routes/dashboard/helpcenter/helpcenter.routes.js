import HelpCenterLayout from './components/HelpCenterLayout';
import { getPortalRoute } from './helpers/routeHelper';

const ListAllPortals = () => import('./pages/portals/ListAllPortals');
const NewPortal = () => import('./pages/portals/NewPortal');
const EditPortal = () => import('./pages/portals/EditPortal');
const ShowPortal = () => import('./pages/portals/ShowPortal');

const ListAllCategories = () => import('./pages/categories/ListAllCategories');
const NewCategory = () => import('./pages/categories/NewCategory');
const EditCategory = () => import('./pages/categories/EditCategory');
const ShowCategory = () => import('./pages/categories/ShowCategory');
const ListCategoryArticles = () =>
  import('./pages/articles/ListCategoryArticles');

const ListAllArticles = () => import('./pages/articles/ListAllArticles');
const ListArchivedArticles = () =>
  import('./pages/articles/ListArchivedArticles');
const ListDraftArticles = () => import('./pages/articles/ListDraftArticles');
const ListMyArticles = () => import('./pages/articles/ListMyArticles');
const NewArticle = () => import('./pages/articles/NewArticle');
const EditArticle = () => import('./pages/articles/EditArticle');

const portalRoutes = [
  {
    path: getPortalRoute(''),
    name: 'list_all_portals',
    roles: ['administrator', 'agent'],
    component: ListAllPortals,
  },
  {
    path: getPortalRoute('new'),
    name: 'new_portal',
    roles: ['administrator', 'agent'],
    component: NewPortal,
  },
  {
    path: getPortalRoute(':portalSlug'),
    name: 'edit_portal',
    roles: ['administrator', 'agent'],
    component: ShowPortal,
  },
  {
    path: getPortalRoute(':portalSlug/edit'),
    name: 'edit_portal',
    roles: ['administrator', 'agent'],
    component: EditPortal,
  },
];

const articleRoutes = [
  {
    path: getPortalRoute(':portalSlug/:locale/articles'),
    name: 'list_all_locale_articles',
    roles: ['administrator', 'agent'],
    component: ListAllArticles,
  },
  {
    path: getPortalRoute(':portalSlug/:locale/articles/archived'),
    name: 'list_archived_articles',
    roles: ['administrator', 'agent'],
    component: ListArchivedArticles,
  },

  {
    path: getPortalRoute(':portalSlug/:locale/articles/draft'),
    name: 'list_draft_articles',
    roles: ['administrator', 'agent'],
    component: ListDraftArticles,
  },
  {
    path: getPortalRoute(':portalSlug/:locale/articles/mine'),
    name: 'list_all_locale_articles',
    roles: ['administrator', 'agent'],
    component: ListMyArticles,
  },
  {
    path: getPortalRoute(':portalSlug/:locale/articles/new'),
    name: 'new_article',
    roles: ['administrator', 'agent'],
    component: NewArticle,
  },
  {
    path: getPortalRoute(':portalSlug/:locale/articles/:articleSlug'),
    name: 'edit_article',
    roles: ['administrator', 'agent'],
    component: EditArticle,
  },
];

const categoryRoutes = [
  {
    path: getPortalRoute(':portalSlug/:locale/categories'),
    name: 'list_all_locale_categories',
    roles: ['administrator', 'agent'],
    component: ListAllCategories,
  },
  {
    path: getPortalRoute(':portalSlug/:locale/categories/new'),
    name: 'new_category_in_locale',
    roles: ['administrator', 'agent'],
    component: NewCategory,
  },
  {
    path: getPortalRoute(':portalSlug/:locale/categories/:categorySlug'),
    name: 'show_category',
    roles: ['administrator', 'agent'],
    component: ShowCategory,
  },
  {
    path: getPortalRoute(
      ':portalSlug/:locale/categories/:categorySlug/articles'
    ),
    name: 'show_category',
    roles: ['administrator', 'agent'],
    component: ListCategoryArticles,
  },
  {
    path: getPortalRoute(':portalSlug/:locale/categories/:categorySlug'),
    name: 'edit_category',
    roles: ['administrator', 'agent'],
    component: EditCategory,
  },
];

export default {
  routes: [
    {
      path: getPortalRoute(),
      component: HelpCenterLayout,
      children: [...portalRoutes, ...articleRoutes, ...categoryRoutes],
    },
  ],
};
