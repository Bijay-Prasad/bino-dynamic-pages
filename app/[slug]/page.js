import { getPage } from '@/lib/pages';
import Card from '@/components/Card';
import ImageBlock from '@/components/ImageBlock';
import TextSection from '@/components/TextSection';
import StatsBox from '@/components/StatsBox';
import CTA from '@/components/CTA';
import AnimatedMain from '@/components/AnimatedMain';
import NotFound from '../not-found';
import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = "mongodb+srv://bijaylife2001:bijay%40mongodb2025@cluster0.gty5vld.mongodb.net/test";


async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  await dbConnect();
  const components = await getPage(slug);

  if (!components) {
    return <NotFound/>;
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