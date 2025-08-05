# Sistema de Internacionalização - MPRS & Xertica.ai

Este projeto agora inclui suporte para múltiplos idiomas: **Português**, **Inglês** e **Espanhol**.

## 📋 Funcionalidades

### Seletor de Idiomas
- **Localização**: Navbar (canto superior direito)
- **Visual**: Bandeiras dos países com códigos de idioma
- **Idiomas disponíveis**:
  - 🇧🇷 **Português** (PT) - Idioma padrão
  - 🇺🇸 **English** (EN)
  - 🇪🇸 **Español** (ES)

### Características do Sistema

#### ✅ **Funcionalidades Implementadas**
- **Troca automática de conteúdo** ao selecionar idioma
- **Persistência da preferência** no localStorage do navegador
- **Título da página dinâmico** que muda conforme o idioma
- **Design responsivo** para dispositivos móveis
- **Bandeiras estilizadas com CSS** e emojis como fallback
- **Hover states** suaves para melhor UX

#### 🔧 **Elementos Traduzidos**
- ✅ Navegação (links do menu)
- ✅ Seção Hero (título, subtítulo, descrição, botões)
- ✅ Timeline da parceria
- ✅ Seção de necessidades (institucional vs individual)  
- ✅ Perspectivas/Pilares (títulos e descrições)
- ✅ Seção de ferramentas (título, subtítulo, descrições)
- ✅ Funcionalidades principais (títulos e descrições)
- ✅ Elementos estruturais importantes

## 🚀 **Como Usar**

### Para Usuários
1. **Acesse o site**
2. **Clique no seletor de idiomas** (canto superior direito da navbar)
3. **Escolha o idioma desejado** clicando na bandeira correspondente
4. **O conteúdo será atualizado automaticamente**
5. **Sua preferência será salva** para próximas visitas

### Para Desenvolvedores

#### **Estrutura de Arquivos**
```
├── index.html          # Página principal com atributos data-translate
├── language.js         # Sistema de internacionalização
├── styles.css          # Estilos do seletor + bandeiras
└── script.js          # Scripts originais da página
```

#### **Como Adicionar Novas Traduções**

1. **No HTML**: Adicione o atributo `data-translate` ao elemento:
```html
<h2 data-translate="minha-chave">Texto Original</h2>
```

2. **No JavaScript**: Adicione a tradução em `language.js`:
```javascript
const translations = {
    'pt': {
        'minha-chave': 'Texto em Português'
    },
    'en': {
        'minha-chave': 'Text in English'
    },
    'es': {
        'minha-chave': 'Texto en Español'
    }
};
```

#### **Como Adicionar Novos Idiomas**

1. **Adicione o idioma no arquivo `language.js`**:
```javascript
const translations = {
    // ... idiomas existentes
    'fr': {
        'page-title': 'Titre en Français',
        // ... todas as traduções
    }
};
```

2. **Adicione a opção no HTML**:
```html
<button class="language-option" data-lang="fr" onclick="switchLanguage('fr')">
    <div class="language-flag flag-france"></div>
    <span>Français</span>
</button>
```

3. **Adicione o CSS da bandeira**:
```css
.flag-france {
    background: linear-gradient(to right, #002654 33%, #fff 33%, #fff 66%, #ed2939 66%);
}
```

## 🎨 **Customização Visual**

### **Bandeiras**
- As bandeiras são criadas com **CSS puro** usando gradientes
- **Emojis como fallback** para garantir visibilidade
- **Tamanho responsivo** que se adapta a diferentes telas

### **Cores do Sistema**
- **Cor principal**: `#EE7D17` (laranja MPRS)
- **Hover states**: Variações da cor principal
- **Bordas**: Cores sutis com transparência

## 📱 **Responsividade**

### **Desktop** 
- Seletor completo com texto e bandeiras
- Dropdown suave com hover effects

### **Mobile**
- Seletor compacto otimizado para toque
- Tamanhos reduzidos mas ainda legíveis
- Funcionalidade preservada

## 🔍 **Detalhes Técnicos**

### **Persistência de Dados**
- **localStorage**: `preferredLanguage`
- **Carregamento automático** da preferência salva
- **Fallback** para português se não houver preferência

### **Atualização de Conteúdo**
- **Busca automática** por elementos com `data-translate`
- **Atualização dinâmica** do atributo `lang` do HTML
- **Mudança do título** da página conforme idioma

### **Performance**
- **JavaScript otimizado** com funções diretas
- **CSS com transições suaves** para melhor UX
- **Código modular** para fácil manutenção

## 📋 **Status do Projeto**

### ✅ **Completo**
- Sistema base de internacionalização
- Seletor visual com bandeiras
- Traduções principais (PT/EN/ES)
- Responsividade
- Persistência de preferências

### 🔄 **Melhorias Futuras Possíveis**
- Tradução de elementos do SVG da timeline
- Tradução de tooltips e textos auxiliares
- Adicionar mais idiomas (francês, alemão, etc.)
- Tradução automática com APIs externas
- Detecção automática do idioma do navegador

---

**Desenvolvido para MPRS & Xertica.ai**  
Sistema de IA com suporte internacional completo 🌍
