import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export interface DepartmentStat {
  label: string;
  value: string | number;
  Icon: React.ElementType;
}

export interface DepartmentCardProps {
  name: string;
  tagline: string;
  imageUrl: string;
  link: string;
  stats: DepartmentStat[];
  className?: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  name,
  tagline,
  imageUrl,
  link,
  stats,
  className,
}) => {
  console.log(`DepartmentCard loaded for: ${name}`);

  const cardWrapperVariants = {
    rest: {
      borderColor: 'hsl(var(--border))',
      boxShadow: '0 0 0px 0px hsla(var(--primary), 0)',
    },
    hover: {
      borderColor: 'hsla(var(--primary), 0.4)',
      boxShadow: '0px 10px 30px -5px hsla(var(--primary), 0.2), 0px 0px 15px -5px hsla(var(--primary), 0.1)',
    },
  };

  const imageVariants = {
    rest: { scale: 1.0 },
    hover: { scale: 1.1 },
  };

  const textGroupVariants = {
    rest: { y: 0 },
    hover: { y: -140 },
  };

  const statsContainerVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const statItemVariants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <Link to={link} className={`block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg ${className}`}>
      <motion.div
        variants={cardWrapperVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full border rounded-lg"
      >
        <Card className="relative w-full h-[400px] overflow-hidden rounded-md cursor-pointer bg-card p-0">
          <motion.img
            src={imageUrl}
            alt={`Image for ${name} department`}
            variants={imageVariants}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative h-full flex flex-col justify-end p-6 text-primary-foreground overflow-hidden">
            <motion.div
              variants={textGroupVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
            >
              <h3 className="font-heading text-3xl font-bold leading-tight">{name}</h3>
              <p className="font-body text-base text-primary-foreground/80">{tagline}</p>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 right-6"
              variants={statsContainerVariants}
            >
              <div className="flex justify-around items-start text-center mb-6">
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={statItemVariants} className="flex flex-col items-center space-y-1.5 w-1/3 px-1">
                    <stat.Icon className="h-7 w-7 text-primary-foreground" />
                    <span className="font-bold text-xl">{stat.value}</span>
                    <span className="text-xs text-primary-foreground/80 uppercase tracking-wider leading-tight">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                variants={statItemVariants}
                className="flex items-center justify-center text-sm font-semibold text-primary-foreground"
              >
                Explore Department
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default DepartmentCard;