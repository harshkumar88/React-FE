const getInitials = (user) => {
  return (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase();
};

export { getInitials };
