import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface DecisionCardProps {
  title: string;
  description: string;
  type?: 'success' | 'warning';
  confidence?: number;
}

export function DecisionCard({ 
  title, 
  description, 
  type = 'success',
  confidence = 95
}: DecisionCardProps) {
  const isSuccess = type === 'success';
  
  return (
    <motion.div
      className={`
        p-4 rounded-xl border-2
        ${isSuccess 
          ? 'bg-accent-green/10 border-accent-green/30' 
          : 'bg-amber-50 border-amber-200'
        }
      `}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <div className="flex items-start gap-3">
        <div className={`
          w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
          ${isSuccess ? 'bg-accent-green/20' : 'bg-amber-100'}
        `}>
          {isSuccess ? (
            <CheckCircle size={18} className="text-accent-green" />
          ) : (
            <AlertCircle size={18} className="text-amber-600" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-text-primary text-sm mb-1">
            {title}
          </h4>
          <p className="text-text-secondary text-xs leading-relaxed">
            {description}
          </p>
          
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${isSuccess ? 'bg-accent-green' : 'bg-amber-500'}`}
                initial={{ width: 0 }}
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <span className={`text-xs font-medium ${isSuccess ? 'text-accent-green' : 'text-amber-600'}`}>
              {confidence}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
