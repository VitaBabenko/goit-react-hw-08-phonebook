export const selectVerify = state => state.auth.verify;

export const selectVerificationToken = state => state.auth.verificationToken;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectLoading = state => state.auth.loading;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;