/**
 * Squidex scripting examples.
 * These scripts can be used in Squidex Rules (Automation > Rules).
 *
 * Content scripts run server-side when content is created/updated.
 * See: https://docs.squidex.io/02-documentation/concepts/scripting
 */

// Example: Auto-set slug from title on create
// Use as a "Script" rule action triggered on ContentCreated
function setSlug(ctx) {
  var title = ctx.data.title.iv;
  if (title) {
    ctx.data.slug = { iv: title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") };
  }
  complete(ctx);
}

// Example: Validate content before publishing
// Use as a "Script" rule action triggered on ContentStatusChanged
function validateBeforePublish(ctx) {
  if (ctx.status === "Published") {
    if (!ctx.data.title || !ctx.data.title.iv) {
      disallow("Title is required before publishing");
    }
  }
  complete(ctx);
}