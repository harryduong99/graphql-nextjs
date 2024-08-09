import { builder } from "../builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    email: t.exposeString("email", { nullable: true }),
    image: t.exposeString("image", { nullable: true }),
    role: t.expose("role", { type: Role }),
    bookmarks: t.relation("bookmarks"),
  }),
});

const Role = builder.enumType("Role", {
  values: ["USER", "ADMIN"] as const,
});

builder.mutationField("updateUserRole", (t) =>
  t.prismaField({
    type: "User",
    args: {
      userId: t.arg.string({ required: true }),
      role: t.arg({ type: Role, required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      return prisma.user.update({
        where: { id: args.userId },
        data: {
          role: args.role,
        },
      });
    },
  })
);

/**
 * mutation UpdateUserRole($userId: String!, $role: Role!) {
    updateUserRole(role: $role, userId: $userId) {
        email
        id
        image
        role
    }
}
 */