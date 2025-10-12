import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  LinkIcon,
  Unlink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Popover } from "@/components/common/Popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { HardBreak } from "@tiptap/extension-hard-break";

const TextEditor = ({
  content = "",
  onChange,
  placeholder = "Start typing...",
  className = "",
  editable = true,
}) => {
  const [linkText, setLinkText] = React.useState("");
  const [linkUrl, setLinkUrl] = React.useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ["paragraph"],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-500 underline cursor-pointer",
        },
      }),
      HardBreak.extend({
        addKeyboardShortcuts () {
          return {
            Enter: () => this.editor.commands.setHardBreak()
          }
        }
      })
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm mx-auto focus:outline-none min-h-[100px] p-3 text-sm w-full",
          "prose-headings:font-semibold prose-headings:text-foreground prose-headings:text-base",
          "prose-p:text-foreground prose-p:leading-relaxed prose-p:text-sm prose-p:break-all prose-p:overflow-wrap-anywhere",
          "prose-strong:text-foreground prose-strong:font-semibold",
          "prose-em:text-foreground prose-em:italic",
          "prose-ul:text-foreground prose-ol:text-foreground prose-ul:text-sm prose-ol:text-sm",
          "prose-li:text-foreground prose-li:text-sm prose-li:break-all prose-li:overflow-wrap-anywhere",
          "prose-blockquote:text-muted-foreground prose-blockquote:border-l-4 prose-blockquote:border-muted-foreground prose-blockquote:text-sm",
          "prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:break-all",
          "prose-pre:bg-muted prose-pre:text-foreground prose-pre:text-sm prose-pre:overflow-x-auto",
          "prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-a:text-sm prose-a:break-all",
          className
        ),
        style: {
          wordBreak: 'break-all',
          overflowWrap: 'anywhere',
          whiteSpace: 'normal',
          maxWidth: '100%',
          overflow: 'hidden'
        },
        placeholder,
      },
    },
  });

  if (!editor) {
    return null;
  }

  const handleLinkClick = () => {
    const previousUrl = editor.getAttributes("link").href;
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to
    );
    
    setLinkText(selectedText || "");
    setLinkUrl(previousUrl || "");
  };

  const handleLinkSubmit = () => {
    if (linkUrl.trim()) {
      // If there's selected text, apply link to it
      if (editor.state.selection.from !== editor.state.selection.to) {
        editor.chain().focus().setLink({ href: linkUrl }).run();
      } else {
        // If no text is selected, insert the link text with the URL
        const textToInsert = linkText || linkUrl;
        const currentPos = editor.state.selection.from;
        
        // Insert the text and apply link formatting
        editor.chain().focus().insertContent(textToInsert).run();
        
        // Move cursor back to the beginning of the inserted text and apply link
        const startPos = currentPos;
        const endPos = currentPos + textToInsert.length;
        editor.chain().focus().setTextSelection({ from: startPos, to: endPos }).setLink({ href: linkUrl }).run();
        
        // Move cursor to the end of the link (after the link) so next text is normal
        editor.chain().focus().setTextSelection({ from: endPos, to: endPos }).run();
      }
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
    setLinkText("");
    setLinkUrl("");
  };

  const handleLinkCancel = () => {
    setLinkText("");
    setLinkUrl("");
  };

  const handleUnlink = () => {
    editor.chain().focus().unsetLink().run();
  };


  return (
    <div className="border border-input rounded-md bg-background w-full max-w-full overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border">
        {/* Text Formatting */}
        <ToggleGroup type="multiple" variant="outline" size="sm">
          <ToggleGroupItem
            value="bold"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={cn(editor.isActive("bold") && "bg-accent")}
            aria-label="Toggle bold"
          >
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={cn(editor.isActive("italic") && "bg-accent")}
            aria-label="Toggle italic"
          >
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="underline"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={cn(editor.isActive("underline") && "bg-accent")}
            aria-label="Toggle underline"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strike"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={cn(editor.isActive("strike") && "bg-accent")}
            aria-label="Toggle strikethrough"
          >
            <Strikethrough className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Separator */}
        <div className="w-px h-6 bg-border mx-1" />

        {/* Text Alignment */}
        <ToggleGroup type="single" variant="outline" size="sm">
          <ToggleGroupItem
            value="left"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={cn(
              editor.isActive({ textAlign: "left" }) && "bg-accent"
            )}
            aria-label="Align left"
          >
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="center"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={cn(
              editor.isActive({ textAlign: "center" }) && "bg-accent"
            )}
            aria-label="Align center"
          >
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="right"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={cn(
              editor.isActive({ textAlign: "right" }) && "bg-accent"
            )}
            aria-label="Align right"
          >
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="justify"
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={cn(
              editor.isActive({ textAlign: "justify" }) && "bg-accent"
            )}
            aria-label="Align justify"
          >
            <AlignJustify className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Separator */}
        <div className="w-px h-6 bg-border mx-1" />

        {/* Link */}
        <Popover
          trigger={
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleLinkClick}
              className={cn(editor.isActive("link") && "bg-accent")}
              aria-label="Add link"
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
           
          }

        >
          <div className="w-64 space-y-4 p-4">
            <div className="flex gap-2">
              <Label htmlFor="link-text" className="text-sm font-medium">
                Text
              </Label>
              <Input
                id="link-text"
                placeholder="Enter link text"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Label htmlFor="link-url" className="text-sm font-medium">
                URL
              </Label>
              <Input
                id="link-url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLinkCancel}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleLinkSubmit}
                disabled={!linkUrl.trim()}
              >
                Apply
              </Button>
            </div>
          </div>
        </Popover>
        {editor.isActive("link") && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleUnlink}
            aria-label="Remove link"
            type="button"
          >
            <Unlink className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Editor Content */}
      <div className="min-h-[100px] max-h-[300px] overflow-y-auto overflow-x-hidden">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
