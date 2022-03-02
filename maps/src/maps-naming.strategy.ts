import { DefaultNamingStrategy, NamingStrategyInterface } from "typeorm";

/**
 * What you see is what you get darn it.
 */
export class WysiwygNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  tableName(className: string, customName: string): string {
    // default converts to snake_case, we want to use WYSIWYG
    return customName ? customName : className;
  }
}
