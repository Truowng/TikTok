import HeaderOnly from "@/components/Layout/HeaderOnly/Header/HeaderOnly";
import Home from "@/Pages/Home/Home";
import Following from "@/Pages/Following/Following";
import Upload from "@/Pages/Upload/Upload";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
