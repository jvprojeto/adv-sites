export const themes = {

  premium: {
    name: "premium",

    hero: {
      container: "bg-black text-white",
      title: "text-6xl font-bold",
      subtitle: "text-xl text-gray-300 mt-8",
      button:
        "bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
    },

    colors: {
      primary: "bg-black",
      text: "text-white",
      secondary: "bg-white",
      title: "text-gray-900",
      paragraph: "text-gray-600",
      accent: "text-yellow-500"
    },

    card: {
      className:
        "bg-white rounded-3xl shadow-xl border p-8"
    }
  },


  executivo: {
    name: "executivo",

    hero: {
      container: "bg-slate-950 text-white",
      title: "text-7xl font-black uppercase",
      subtitle: "text-2xl text-slate-300 mt-8",
      button:
        "bg-amber-600 text-white px-10 py-5 rounded-xl font-bold"
    },

    colors: {
      primary: "bg-slate-950",
      text: "text-white",
      secondary: "bg-slate-100",
      title: "text-slate-900",
      paragraph: "text-slate-600",
      accent: "text-amber-600"
    },

    card: {
      className:
        "bg-white rounded-xl shadow-2xl border border-slate-200 p-10"
    }
  },


  minimalista: {
    name: "minimalista",

    hero: {
      container: "bg-white text-black",
      title: "text-6xl font-light",
      subtitle: "text-xl text-gray-500 mt-8",
      button:
        "border border-black px-8 py-4 rounded-full"
    },

    colors: {
      primary: "bg-white",
      text: "text-black",
      secondary: "bg-white",
      title: "text-black",
      paragraph: "text-gray-500",
      accent: "text-black"
    },

    card: {
      className:
        "bg-gray-50 rounded-2xl border p-8"
    }
  },


  empresarial: {
    name: "empresarial",

    hero: {
      container: "bg-blue-950 text-white",
      title: "text-6xl font-bold",
      subtitle: "text-xl text-blue-100 mt-8",
      button:
        "bg-blue-600 text-white px-8 py-4 rounded-xl font-bold"
    },

    colors: {
      primary: "bg-blue-950",
      text: "text-white",
      secondary: "bg-white",
      title: "text-blue-950",
      paragraph: "text-gray-600",
      accent: "text-blue-600"
    },

    card: {
      className:
        "bg-white rounded-2xl shadow-lg border border-blue-100 p-8"
    }
  },


  tribunal: {
    name: "tribunal",

    hero: {
      container: "bg-neutral-950 text-white",
      title: "text-6xl font-serif font-bold",
      subtitle: "text-xl text-gray-300 mt-8",
      button:
        "bg-yellow-700 text-white px-8 py-4 rounded-lg font-bold"
    },

    colors: {
      primary: "bg-neutral-950",
      text: "text-white",
      secondary: "bg-neutral-50",
      title: "text-neutral-900",
      paragraph: "text-gray-700",
      accent: "text-yellow-700"
    },

    card: {
      className:
        "bg-white border border-neutral-200 rounded-lg p-8 shadow"
    }
  }

};