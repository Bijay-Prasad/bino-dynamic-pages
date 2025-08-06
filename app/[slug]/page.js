import { getPage } from '@/lib/pages';
import Card from '@/components/Card';
import ImageBlock from '@/components/ImageBlock';
import TextSection from '@/components/TextSection';
import StatsBox from '@/components/StatsBox';
import CTA from '@/components/CTA';
import AnimatedMain from '@/components/AnimatedMain';
import NotFound from '../not-found';

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const components = getPage(slug);

  if (!components) {
    return (
      <NotFound/>
      // <div className="min-h-screen bg-gradient-to-br from-black via-zinc-700 to-zinc-400 flex items-center justify-center">
      //   <div className="max-w-xl w-full mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center">
      //     <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-100 bg-clip-text text-transparent mb-4 drop-shadow-lg">
      //       Page Not Found
      //     </h1>
      //     <p className="text-lg text-gray-700 mb-6">
      //       Sorry, the page you requested does not exist.
      //     </p>
      //   </div>
      // </div>
    );
  }

  const componentMap = {
    Card,
    ImageBlock,
    TextSection,
    StatsBox,
    CTA
  };

  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.7,
        ease: "easeOut"
      },
    },
  };

  return (
    <AnimatedMain
      className="min-h-screen bg-white/10 sm:py-10 md:py-12 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container max-w-3xl w-full mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        {components.map((component, index) => {
          const Component = componentMap[component.type];
          if (!Component) return null;
          return <Component key={index} {...component.props} />;
        })}
      </div>
    </AnimatedMain>
  );
}