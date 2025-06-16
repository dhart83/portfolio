export default defineEventHandler(async () => {
  const projects = await import("~/server/data/projects.json");
  try {
    return projects.default;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found...",
    });
  }
});
