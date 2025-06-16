export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  try {
    const experience = await import("~/server/data/experience.json");
    return experience.default.find((experience) => experience.id === id);
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found...",
    });
  }
});
