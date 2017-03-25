class MangaCrawlerCommand{

    parameters = {
        v: false,
        help: false,
        find: false,
        site: false,
        min_chapters: false,
        manga_xml_file: false,
        azure_account_key: false,
        output_file: false,
    };
    

    set(name, value) {
        this.parameters[name] = value;
    }

    cmd()
    {
        var cmd = "MangaCrawler";
        var par = this.parameters;
        if(par.v)                  cmd += " -v";
        if(par.help)               cmd += " --help";
        if(par.find)               cmd += " --find="               +par.find;
        if(par.site)               cmd += " --site="               +par.site;
        if(par.min_chapters)       cmd += " --min-chapters="       +par.min_chapters;
        if(par.manga_xml_file)     cmd += " --manga-xml-file='"    +par.manga_xml_file+"'";
        if(par.azure_account_key)  cmd += " --azure-account-key="  +par.azure_account_key;
        if(par.output_file)        cmd += " --output-file='"       +par.output_file+"'";
        return cmd;
    }

    sites = [
        {value:"mangafox", label: "Manga Fox"}
    ];

    finds = [
        {value:"new", label: "New"},
        {value:"updated", label: "Updated"}
    ];


}

module.exports = MangaCrawlerCommand;