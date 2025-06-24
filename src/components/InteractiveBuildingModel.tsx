import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Move3d } from 'lucide-react';

const InteractiveBuildingModel: React.FC = () => {
  console.log('InteractiveBuildingModel loaded');
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // We transform the mouse position (from -1 to 1) to a rotation value
  const rotateX = useTransform(y, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(x, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Normalize mouse position to a range of -0.5 to 0.5
    const mouseX = (event.clientX - left) / width - 0.5;
    const mouseY = (event.clientY - top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Animate back to the center
    x.set(0);
    y.set(0);
  };

  return (
    <Card 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-[400px] md:h-[600px] bg-background relative overflow-hidden flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          scale: 1.05,
          transition: 'transform 0.1s ease-out',
        }}
        className="relative w-[90%] h-[90%] md:w-[80%] md:h-[80%]"
      >
        <img
          src="https://images.unsplash.com/photo-1618224923238-961168f0376c?q=80&w=2128&auto=format&fit=crop"
          alt="Architectural model of a futuristic campus building"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl shadow-primary/20"
          style={{ transform: 'translateZ(20px) scale(1.0)' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 rounded-lg"
          style={{ transform: 'translateZ(21px)' }}
        />
        <div 
          className="absolute top-6 left-6 p-4 bg-black/30 backdrop-blur-sm rounded-md border border-white/10"
          style={{ transform: 'translateZ(50px)' }}
        >
          <h2 className="font-heading text-xl md:text-3xl text-primary-foreground font-bold">
            Center for Advanced AI Research
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Visualizing the future of technology.
          </p>
        </div>
        <div 
          className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-primary-foreground/50 p-2 bg-black/20 rounded-full"
          style={{ transform: 'translateZ(40px)' }}
        >
          <Move3d className="w-4 h-4" />
          <span>Move to explore</span>
        </div>
      </motion.div>
    </Card>
  );
};

export default InteractiveBuildingModel;