import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooterText = ({ text, linkText, linkTo }) => (
  <p className="text-center text-sm text-[#8A8F98] mt-8">
    {text}{' '}
    <Link to={linkTo} className="text-[#5B9AFF] hover:text-[#7DB3FF] font-medium transition-colors">
      {linkText}
    </Link>
  </p>
);

export default AuthFooterText;
