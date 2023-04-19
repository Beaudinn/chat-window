/** @jsx jsx */
import {jsx} from 'theme-ui';

export const SendIcon = ({
  width,
  height,
  fill,
  className,
}: {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      height={height || 12}
      width={width || 12}
      viewBox="0 0 12 12"
      className={className}
      sx={{fill: fill || 'black'}}
    >
      <path d="M11.2885 7.78276L9.11524 7.85306L9.20136 5.19087L9.44768 4.28739L9.14011 4.14809L8.5722 4.92628L1.7996 11.6989L0.30127 10.2006L7.07387 3.42795L7.85207 2.86005L7.71277 2.55248L6.80928 2.7988L4.1471 2.88491L4.21739 0.711696L10.4111 0.511353L11.4888 1.5891L11.2885 7.78276Z" />
    </svg>
  );
};

export default SendIcon;
