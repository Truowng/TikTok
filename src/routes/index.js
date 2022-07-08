import Home from "@/Pages/Home/Home";
import Following from "@/Pages/Following/Following";
import Upload from "@/Pages/Upload/Upload";
import Profile from "@/Pages/Profile/Profile";
import HeaderOnly from "@/components/Layout/HeaderOnly/HeaderOnly";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
