using System.Xml;

namespace XMLDemoApp
{
    class Program
    {
        static void Main(string[] args)
        {
            CreateXMLFile();
            System.Console.ReadLine();


        }static void CreateXMLFile()
        {
            XmlDocument doc = new XmlDocument();
            XmlElement root = doc.CreateElement("Movies");
            doc.AppendChild(root);
            doc.Save(@"C:\Users\douglas.menchon\source\repos\XMLDemoApp\XMLDemoApp\Movies.xml");
            System.Console.WriteLine(doc.InnerXml);
        }
    }
}
