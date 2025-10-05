import { CLIProps } from "@/types/component.types";

export const cliData: CLIProps = {
  whoami:
    "Edgar is a simple hooman. No bugs? Edgar happy. More bugs? Edgar sad.",

  ls: ["likes.txt", "dislikes.txt", "bio.txt", "funfacts.txt"],

  files: {
    "likes.txt":
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "            THINGS I LIKE\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
      "~ Games\n" +
      "   • Honkai: Star Rail\n\n" +
      "~ Programming Language\n" +
      "   • TypeScript\n\n" +
      "~ Music\n" +
      "   • Artists: Kendrick Lamar, Matt Maltese, Joji\n" +
      "   • Song: Everyone Adores You (Matt Maltese)\n\n" +
      "~ Food\n" +
      "   • Tofu, Rice cake\n\n" +
      "~ Moment\n" +
      "   • Playing video games on a rainy day",

    "bio.txt":
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "              ABOUT ME\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
      "Hi, I'm Edgar.\n\n" +
      "A curious mind and tech enthusiast who enjoys\n" +
      "exploring how code, design, and people intersect.\n\n" +
      "But purely making functional codes, can feel a bit dull sometimes,\n" +
      "so if it wouldn't hurt, why not make it a little fun?\n\n" +
      "I like building things that feel practical but a\n" +
      "little playful — much like this CLI.\n\n" +
      "Always learning, always tinkering.",

    "funfacts.txt":
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "            FUN FACTS\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
      "~ I once spent longer time naming a variable than writing the function itself.\n\n" +
      "~ “Just one more feature” has ruined more nights than I’d admit.\n\n" +
      "~ I sometimes overthink simple things and simplify complicated ones.\n\n" +
      "~ I prefer backend over frontend.\n\n" +
      "~ I like peace and quiet, until it gets suspiciously peaceful.",

    "dislikes.txt":
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
      "          THINGS I DISLIKE\n" +
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
      "~ Slow internet\n\n" +
      "~ Semantic errors\n\n" +
      "~ Light mode\n\n" +
      "~ Merging conflicts\n\n" +
      "~ Sansa Stark",
  },
  cmd: [
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "         AVAILABLE COMMANDS",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "~ whoami",
    "   Display user info",
    "",
    "~ ls",
    "   List available files",
    "",
    "~ cat <file>",
    "   Show file contents",
    "   Example: cat bio.txt",
    "",
    "~ echo <anything>",
    "   Repeat back text",
    "",
    "~ sudo <anything>",
    "   Take control of something (if you dare)",
    "",
    "~ clear",
    "   Clear the terminal",
    "",
    "~ fortune",
    "   Get a random fact or quote",
    "",
  ],
};
