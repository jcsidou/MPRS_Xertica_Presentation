#!/usr/bin/env python3
# simples conversor TTF -> WOFF2 usando fontTools
# Requer: pip install --user fonttools brotli

import sys
from pathlib import Path

try:
    from fontTools.ttLib import TTFont
except Exception as e:
    print('Erro importando fontTools:', e)
    sys.exit(2)

in_file = Path('fonts/Netron.ttf')
out_file = Path('fonts/Netron.woff2')

if not in_file.exists():
    print(f'Arquivo de entrada não encontrado: {in_file.resolve()}')
    sys.exit(3)

try:
    font = TTFont(str(in_file))
    font.flavor = 'woff2'
    font.save(str(out_file))
    print('Conversão concluída:', out_file.resolve())
except Exception as e:
    print('Erro durante conversão:', e)
    sys.exit(4)
