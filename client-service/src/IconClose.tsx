type Props = {
  readonly className?: string;
};

export const IconClose = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='black'
    >
      <path d='M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM12.71 11.29C12.8037 11.383 12.8781 11.4936 12.9289 11.6154C12.9797 11.7373 13.0058 11.868 13.0058 12C13.0058 12.132 12.9797 12.2627 12.9289 12.3846C12.8781 12.5064 12.8037 12.617 12.71 12.71C12.617 12.8037 12.5064 12.8781 12.3846 12.9289C12.2627 12.9797 12.132 13.0058 12 13.0058C11.868 13.0058 11.7373 12.9797 11.6154 12.9289C11.4936 12.8781 11.383 12.8037 11.29 12.71L10 11.41L8.71 12.71C8.61704 12.8037 8.50644 12.8781 8.38458 12.9289C8.26272 12.9797 8.13202 13.0058 8 13.0058C7.86799 13.0058 7.73729 12.9797 7.61543 12.9289C7.49357 12.8781 7.38297 12.8037 7.29 12.71C7.19628 12.617 7.12188 12.5064 7.07111 12.3846C7.02034 12.2627 6.99421 12.132 6.99421 12C6.99421 11.868 7.02034 11.7373 7.07111 11.6154C7.12188 11.4936 7.19628 11.383 7.29 11.29L8.59 10L7.29 8.71C7.1017 8.5217 6.99591 8.2663 6.99591 8C6.99591 7.7337 7.1017 7.4783 7.29 7.29C7.47831 7.1017 7.7337 6.99591 8 6.99591C8.26631 6.99591 8.5217 7.1017 8.71 7.29L10 8.59L11.29 7.29C11.4783 7.1017 11.7337 6.99591 12 6.99591C12.2663 6.99591 12.5217 7.1017 12.71 7.29C12.8983 7.4783 13.0041 7.7337 13.0041 8C13.0041 8.2663 12.8983 8.5217 12.71 8.71L11.41 10L12.71 11.29Z' />
    </svg>
  );
};