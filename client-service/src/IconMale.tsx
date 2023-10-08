type Props = {
  readonly className?: string;
};

export const IconMale = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      stroke='black'
    >
      <g>
        <path d='M41.9509 15.049V6.049H32.9509' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
        <path
          d='M10.413 38.001C15.88 43.468 24.745 43.468 30.212 38.001C31.5139 36.7023 32.5464 35.1591 33.25 33.4602C33.9536 31.7612 34.3145 29.9399 34.312 28.101C34.312 24.519 32.946 20.936 30.212 18.202C24.745 12.735 15.88 12.735 10.413 18.202C4.94599 23.669 4.94599 32.534 10.413 38.001V38.001Z'
          strokeWidth='4'
          strokeLinejoin='round'
        />
        <path d='M30 18L39.952 8.049' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  );
};
