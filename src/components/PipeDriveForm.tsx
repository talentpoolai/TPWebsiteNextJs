import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PipeDriveForm: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove any existing loader script
    const existingScript = document.querySelector(
      'script[src="https://webforms.pipedrive.com/f/loader"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add the Pipedrive loader script
    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;
    script.onload = () => {
      console.log('Pipedrive script loaded');
      
      // Listen for form submission events
      const checkForFormSubmission = () => {
        const forms = document.querySelectorAll('form[data-pd-webforms]');
        forms.forEach(form => {
          form.addEventListener('submit', (e) => {
            // Add a small delay to allow form submission to complete
            setTimeout(() => {
              navigate('/thank-you');
            }, 1000);
          });
        });
      };
      
      // Check for forms periodically since they're loaded dynamically
      const interval = setInterval(() => {
        const forms = document.querySelectorAll('form[data-pd-webforms]');
        if (forms.length > 0) {
          checkForFormSubmission();
          clearInterval(interval);
        }
      }, 500);
      
      // Clear interval after 10 seconds to avoid infinite checking
      setTimeout(() => clearInterval(interval), 10000);
    };
    script.onerror = () => {
      console.error('Failed to load Pipedrive script');
    };
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      script.remove();
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        className="pipedriveWebForms w-full max-w-lg" // max-w-lg constrains width
        data-pd-webforms="https://webforms.pipedrive.com/f/6Ox8itCuTWogQA9glMzF6bCSiupqiuDvaNPO35cGtGpQ5z2fdsxZpiv50qKXv2qZ1h"
      />
    </div>
  );
};

export default PipeDriveForm;