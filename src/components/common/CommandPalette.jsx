import React, { useEffect, useState, useCallback } from 'react';
import { Command } from 'cmdk';
import {
  User, Briefcase, Code2, Wrench, Mail,
  Github, Linkedin, Download, Moon, Sun,
  ArrowRight, Copy, Check, Terminal,
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { copyToClipboard, scrollToElement } from '../../utils/helpers';

/**
 * Cmd+K command palette.
 * Sections: Navigate, Connect, Actions, Easter Egg.
 */
const CommandPalette = () => {
  const [open, setOpen]       = useState(false);
  const [copied, setCopied]   = useState(false);
  const [input, setInput]     = useState('');
  const { theme, toggleTheme } = useTheme();
  const { personal }           = portfolioData;

  /* ── Open / close ── */
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(p => !p);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) setInput('');
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const run = useCallback((fn) => {
    setOpen(false);
    setTimeout(fn, 80); // let close animation finish first
  }, []);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(personal.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  /* ── Easter egg: "sudo" input ── */
  const isSudo = input.trim().toLowerCase() === 'sudo';

  const navItems = [
    { id: 'about',      label: 'Go to About',      icon: User      },
    { id: 'experience', label: 'Go to Experience',  icon: Briefcase },
    { id: 'work',       label: 'Go to Work',        icon: Code2     },
    { id: 'skills',     label: 'Go to Skills',      icon: Wrench    },
    { id: 'contact',    label: 'Go to Contact',     icon: Mail      },
  ];

  return (
    <>
      {/* ── Backdrop ── */}
      {open && (
        <div
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Palette ── */}
      {open && (
        <div
          role="dialog"
          aria-label="Command palette"
          className="fixed top-[20vh] left-1/2 -translate-x-1/2 z-[9999] w-full max-w-lg px-4"
        >
          <Command
            className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
            style={{
              background: 'rgba(13, 30, 28, 0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(45, 212, 191, 0.18)',
            }}
            onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.06]">
              <Terminal className="w-4 h-4 text-accent flex-shrink-0" />
              <Command.Input
                value={input}
                onValueChange={setInput}
                placeholder="Type a command or search…"
                className="flex-1 bg-transparent text-sm text-[#e8fafa] placeholder:text-[#4d8582] outline-none"
                autoFocus
              />
              <kbd className="text-[10px] text-[#4d8582] border border-white/10 rounded px-1.5 py-0.5">
                ESC
              </kbd>
            </div>

            <Command.List className="max-h-[340px] overflow-y-auto py-2">
              <Command.Empty className="py-8 text-center text-[#4d8582] text-sm">
                No results found.
              </Command.Empty>

              {/* ── Easter egg ── */}
              {isSudo && (
                <Command.Item
                  onSelect={() => run(() => {
                    document.documentElement.style.filter = 'hue-rotate(180deg)';
                    setTimeout(() => {
                      document.documentElement.style.filter = '';
                    }, 1500);
                  })}
                  className="palette-item mx-2 mb-1"
                >
                  <span className="text-accent">🐚</span>
                  <span className="text-sm text-[#e8fafa]">sudo make me a sandwich</span>
                  <span className="ml-auto text-[11px] text-[#4d8582]">Easter egg</span>
                </Command.Item>
              )}

              {/* ── Navigate ── */}
              <Command.Group
                heading="Navigate"
                className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[#4d8582]"
              >
                {navItems.map(({ id, label, icon: Icon }) => (
                  <Command.Item
                    key={id}
                    value={label}
                    onSelect={() => run(() => scrollToElement(id))}
                    className="palette-item mx-2"
                  >
                    <div className="p-1.5 rounded-lg bg-accent/10">
                      <Icon className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-sm text-[#b2d8d5]">{label}</span>
                    <ArrowRight className="ml-auto w-3 h-3 text-[#4d8582]" />
                  </Command.Item>
                ))}
              </Command.Group>

              {/* ── Connect ── */}
              <Command.Group
                heading="Connect"
                className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[#4d8582]"
              >
                <Command.Item
                  value="github open profile"
                  onSelect={() => run(() => window.open(personal.github, '_blank'))}
                  className="palette-item mx-2"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10">
                    <Github className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-[#b2d8d5]">Open GitHub</span>
                  <span className="ml-auto text-[11px] text-[#4d8582]">↗</span>
                </Command.Item>

                <Command.Item
                  value="linkedin open profile"
                  onSelect={() => run(() => window.open(personal.linkedin, '_blank'))}
                  className="palette-item mx-2"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10">
                    <Linkedin className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-[#b2d8d5]">Open LinkedIn</span>
                  <span className="ml-auto text-[11px] text-[#4d8582]">↗</span>
                </Command.Item>

                <Command.Item
                  value="copy email address"
                  onSelect={() => run(handleCopyEmail)}
                  className="palette-item mx-2"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10">
                    {copied
                      ? <Check className="w-3.5 h-3.5 text-green-400" />
                      : <Copy className="w-3.5 h-3.5 text-accent" />
                    }
                  </div>
                  <span className="text-sm text-[#b2d8d5]">
                    {copied ? 'Email copied!' : 'Copy email address'}
                  </span>
                </Command.Item>
              </Command.Group>

              {/* ── Actions ── */}
              <Command.Group
                heading="Actions"
                className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[#4d8582]"
              >
                <Command.Item
                  value="toggle theme dark light mode"
                  onSelect={() => run(toggleTheme)}
                  className="palette-item mx-2"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10">
                    {theme === 'dark'
                      ? <Sun  className="w-3.5 h-3.5 text-accent" />
                      : <Moon className="w-3.5 h-3.5 text-accent" />
                    }
                  </div>
                  <span className="text-sm text-[#b2d8d5]">
                    Switch to {theme === 'dark' ? 'light' : 'dark'} mode
                  </span>
                </Command.Item>

                <Command.Item
                  value="download resume cv"
                  onSelect={() => run(() => {
                    const a = document.createElement('a');
                    a.href = personal.resume;
                    a.download = '';
                    a.click();
                  })}
                  className="palette-item mx-2"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10">
                    <Download className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-[#b2d8d5]">Download resume</span>
                </Command.Item>
              </Command.Group>
            </Command.List>

            {/* Footer hint */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.06]">
              <span className="text-[10px] text-[#4d8582]">
                Try typing <span className="text-accent/70 font-mono">sudo</span>
              </span>
              <div className="flex items-center gap-3 text-[10px] text-[#4d8582]">
                <span><kbd className="font-mono">↑↓</kbd> navigate</span>
                <span><kbd className="font-mono">↵</kbd> select</span>
              </div>
            </div>
          </Command>
        </div>
      )}

      <style>{`
        .palette-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.15s ease;
          margin-bottom: 2px;
        }
        .palette-item[data-selected='true'],
        .palette-item:hover {
          background: rgba(45, 212, 191, 0.08);
        }
        [cmdk-list]::-webkit-scrollbar { width: 4px; }
        [cmdk-list]::-webkit-scrollbar-track { background: transparent; }
        [cmdk-list]::-webkit-scrollbar-thumb { background: rgba(45,212,191,0.2); border-radius: 4px; }
      `}</style>
    </>
  );
};

export default CommandPalette;