import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            to="/"
            icon={Home}
            iconPosition="left"
          >
            Go Home
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.history.back()}
            icon={ArrowLeft}
            iconPosition="left"
          >
            Go Back
          </Button>
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-tertiary mb-4">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/#about" className="text-accent hover:underline">
              About
            </Link>
            <Link to="/#projects" className="text-accent hover:underline">
              Projects
            </Link>
            <Link to="/#experience" className="text-accent hover:underline">
              Experience
            </Link>
            <Link to="/#contact" className="text-accent hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;