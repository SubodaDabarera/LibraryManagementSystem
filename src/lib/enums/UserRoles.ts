enum UserRoles {
  Member = "Member",
  Librarian = "Librarian",
  HeadOfLibrary = "HeadOfLibrary",
}

const userRolesArray = [
  { label: "Member", value: UserRoles.Member },
  { label: "Librarian", value: UserRoles.Librarian },
  { label: "Head Of Library", value: UserRoles.HeadOfLibrary },
];

export { UserRoles, userRolesArray };
