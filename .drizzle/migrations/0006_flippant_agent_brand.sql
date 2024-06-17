ALTER TABLE "note" DROP CONSTRAINT "note_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "note" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "note" ALTER COLUMN "userId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "note" ALTER COLUMN "userId" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note" ADD CONSTRAINT "note_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
