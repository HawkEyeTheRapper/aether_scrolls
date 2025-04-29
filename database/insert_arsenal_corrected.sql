CREATE TABLE IF NOT EXISTS arsenal (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project TEXT,
    album TEXT,
    track_number INTEGER,
    track_title TEXT,
    file_name TEXT,
    url TEXT
);

INSERT INTO arsenal (project, album, track_number, track_title, file_name, url) VALUES
('The Mixtape Sessions', 'Full Disclosure', 1, 'Swordfish', '01_swordfish.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/01_swordfish.md'),
('The Mixtape Sessions', 'Full Disclosure', 2, 'Mic Check', '02_mic_check.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/02_mic_check.md'),
('The Mixtape Sessions', 'Full Disclosure', 3, 'Shakur', '03_shakur.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/03_shakur.md'),
('The Mixtape Sessions', 'Full Disclosure', 4, 'Last One Left', '04_last_one_left.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/04_last_one_left.md'),
('The Mixtape Sessions', 'Full Disclosure', 5, 'Full Disclosure', '05_full_disclosure.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/05_full_disclosure.md'),
('The Mixtape Sessions', 'Full Disclosure', 6, 'Lifted', '06_lifted.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/06_lifted.md'),
('The Mixtape Sessions', 'Full Disclosure', 7, 'Fuck Society', '07_fuck_society.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/07_fuck_society.md'),
('The Mixtape Sessions', 'Full Disclosure', 8, 'Ashes', '08_ashes.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/08_ashes.md'),
('The Mixtape Sessions', 'Full Disclosure', 9, 'Haunted', '09_haunted.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/09_haunted.md'),
('The Mixtape Sessions', 'Full Disclosure', 10, 'Monumental', '10_monumental.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/10_monumental.md'),
('The Mixtape Sessions', 'Full Disclosure', 11, 'Trafficked', '11_trafficked_web.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/11_trafficked_web.md'),
('The Mixtape Sessions', 'Full Disclosure', 12, 'Hocus Pocus', '12_hocus_pocus.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/12_hocus_pocus.md'),
('The Mixtape Sessions', 'Full Disclosure', 13, 'Syntax', '13_syntax.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/13_syntax.md'),
('The Mixtape Sessions', 'Full Disclosure', 14, 'Stay Real', '14_stay_real.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/14_stay_real.md'),
('The Mixtape Sessions', 'Full Disclosure', 15, 'The Story of Our Former Glory', '15_the_story_of_our_former_glory.md', 'https://s3.omniversalmedia.app/src/data/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/15_the_story_of_our_former_glory.md');