import { Inter, Lusitana } from "next/font/google";

// 在网站中，添加字体，可以在这里配置
/* 
为什么要配置字体？
- 累积布局偏移，是评估网站体验和性能优化的指标
- 我们使用next/font的时候，next.js 会在构建的时候，下载字体和静态资源一起托管，就不会有其他的网络请求，来请求字体
*/
export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
