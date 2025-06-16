export default defineEventHandler(async () => {
  const experience = await import("~/server/data/experience.json");
  try {
    return experience.default;
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found...",
    });
  }
});
