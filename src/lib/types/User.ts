export type UserRole = 'Member' | 'Librarian' | 'HeadOfLibrary';
type MembershipStatus = 'Active' | 'Inactive';

export interface User {
    id?: string;
    username: string;
    email: string;
    role: UserRole;
    name: string;
  }
  
  export interface Member extends User {
    membershipStatus: MembershipStatus;
    paymentDue: number;
    nextPaymentDate: string;
  }

  export interface AuthUser{
    id: string,
    username: string;
    email: string;
    password: string;
    role: UserRole;
    name: string;
  }

  export interface UpdateUserRequest{
    id: string;
    username?: string;
    email?: string;
    role?: UserRole;
    name?: string;
  }