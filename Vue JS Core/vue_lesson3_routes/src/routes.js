import Home from "@/components/Home";
import Contact from "@/components/Contact";
import MyProjects from '@/components/MyProjects'

export const routes = [
    {
        path: '', component: Home, name: 'Home'
    },
    {
        path: '/conatct', component: Contact, name: 'Contact'
    },
    {
        path: '/project', component: MyProjects, name: 'MyProjects'
    },
    {path: '*', component: Home}
]