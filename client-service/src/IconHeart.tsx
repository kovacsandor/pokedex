type Props = {
  readonly className?: string;
};

export const IconHeart = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      stroke='#000000'
    >
      <path
        d='M5.25 2.25C3.17925 2.25 1.5 3.912 1.5 5.9625C1.5 7.61775 2.15625 11.5463 8.616 15.5175C8.73171 15.5879 8.86455 15.6251 9 15.6251C9.13545 15.6251 9.26829 15.5879 9.384 15.5175C15.8438 11.5463 16.5 7.61775 16.5 5.9625C16.5 3.912 14.8207 2.25 12.75 2.25C10.6793 2.25 9 4.5 9 4.5C9 4.5 7.32075 2.25 5.25 2.25Z'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
