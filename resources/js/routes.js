import AdminHome from './components/admin/AdminHome'
import CategoryList from './components/admin/category/List'
import CategoryAdd from './components/admin/category/New'

export const routes = [
     { path: '/home', component: AdminHome },
     { path: '/category-list', component: CategoryList },
     { path: '/add-category', component: CategoryAdd },

]