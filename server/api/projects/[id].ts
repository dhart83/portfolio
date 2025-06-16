export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const projects = await import("~/server/data/projects.json");
  try {
    return projects.default.find((project) => project.id === id);
  } catch (error) {
    console.log("error");
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found...",
    });
  }
});
