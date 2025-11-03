"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Bot, 
  Target, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Eye, 
  MousePointer, 
  BarChart3,
  Settings,
  Play,
  Pause,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Zap
} from "lucide-react"

interface Campaign {
  id: string
  name: string
  niche: string
  budget: number
  targetAudience: string
  status: 'running' | 'paused' | 'optimizing' | 'completed'
  impressions: number
  clicks: number
  conversions: number
  spend: number
  ctr: number
  cpc: number
  roas: number
}

export default function TrafegoIA() {
  const [activeTab, setActiveTab] = useState("create")
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: "1",
      name: "Campanha E-commerce Fashion",
      niche: "Moda Feminina",
      budget: 5000,
      targetAudience: "Mulheres 25-40 anos",
      status: "running",
      impressions: 45230,
      clicks: 1820,
      conversions: 89,
      spend: 2340,
      ctr: 4.02,
      cpc: 1.29,
      roas: 4.8
    },
    {
      id: "2", 
      name: "Campanha SaaS B2B",
      niche: "Software Empresarial",
      budget: 8000,
      targetAudience: "Empresários 30-50 anos",
      status: "optimizing",
      impressions: 28900,
      clicks: 890,
      conversions: 34,
      spend: 1890,
      ctr: 3.08,
      cpc: 2.12,
      roas: 3.2
    }
  ])

  const [formData, setFormData] = useState({
    campaignName: "",
    niche: "",
    budget: "",
    targetAudience: "",
    campaignGoal: "",
    description: ""
  })

  const [isCreating, setIsCreating] = useState(false)

  const handleCreateCampaign = async () => {
    setIsCreating(true)
    
    // Simular processamento da IA
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: formData.campaignName,
      niche: formData.niche,
      budget: parseInt(formData.budget),
      targetAudience: formData.targetAudience,
      status: "running",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      spend: 0,
      ctr: 0,
      cpc: 0,
      roas: 0
    }
    
    setCampaigns([...campaigns, newCampaign])
    setFormData({
      campaignName: "",
      niche: "",
      budget: "",
      targetAudience: "",
      campaignGoal: "",
      description: ""
    })
    setIsCreating(false)
    setActiveTab("dashboard")
  }

  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case 'running': return 'bg-green-500'
      case 'paused': return 'bg-yellow-500'
      case 'optimizing': return 'bg-blue-500'
      case 'completed': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: Campaign['status']) => {
    switch (status) {
      case 'running': return 'Ativa'
      case 'paused': return 'Pausada'
      case 'optimizing': return 'Otimizando'
      case 'completed': return 'Concluída'
      default: return 'Desconhecido'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">TrafegoIA</h1>
                <p className="text-sm text-purple-200">Inteligência Artificial Autônoma</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                <Zap className="w-3 h-3 mr-1" />
                IA Ativa
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black/20 border border-white/10">
            <TabsTrigger value="create" className="data-[state=active]:bg-purple-600">
              Criar Campanha
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-purple-600">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Criar Campanha */}
          <TabsContent value="create" className="space-y-6">
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Nova Campanha com IA
                </CardTitle>
                <CardDescription className="text-gray-300">
                  A IA criará e otimizará sua campanha automaticamente. Apenas forneça os dados básicos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="campaignName" className="text-white">Nome da Campanha</Label>
                    <Input
                      id="campaignName"
                      placeholder="Ex: Loja de Roupas Femininas"
                      value={formData.campaignName}
                      onChange={(e) => setFormData({...formData, campaignName: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="niche" className="text-white">Nicho/Segmento</Label>
                    <Select value={formData.niche} onValueChange={(value) => setFormData({...formData, niche: value})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecione o nicho" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="saas">SaaS/Software</SelectItem>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                        <SelectItem value="financas">Finanças</SelectItem>
                        <SelectItem value="imobiliario">Imobiliário</SelectItem>
                        <SelectItem value="servicos">Serviços</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-white">Orçamento (R$)</Label>
                    <Input
                      id="budget"
                      type="number"
                      placeholder="5000"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="campaignGoal" className="text-white">Objetivo da Campanha</Label>
                    <Select value={formData.campaignGoal} onValueChange={(value) => setFormData({...formData, campaignGoal: value})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Selecione o objetivo" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="vendas">Aumentar Vendas</SelectItem>
                        <SelectItem value="leads">Gerar Leads</SelectItem>
                        <SelectItem value="trafego">Aumentar Tráfego</SelectItem>
                        <SelectItem value="brand">Brand Awareness</SelectItem>
                        <SelectItem value="engajamento">Engajamento</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience" className="text-white">Público-Alvo</Label>
                  <Input
                    id="targetAudience"
                    placeholder="Ex: Mulheres de 25-40 anos interessadas em moda"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">Descrição do Produto/Serviço</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva seu produto ou serviço para que a IA possa criar anúncios mais eficazes..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                  />
                </div>

                <Button 
                  onClick={handleCreateCampaign}
                  disabled={isCreating || !formData.campaignName || !formData.niche || !formData.budget}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
                >
                  {isCreating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      IA Criando Campanha...
                    </>
                  ) : (
                    <>
                      <Bot className="w-4 h-4 mr-2" />
                      Criar com IA
                    </>
                  )}
                </Button>

                {isCreating && (
                  <div className="space-y-3">
                    <div className="text-center text-purple-300">
                      <p className="font-medium">IA Trabalhando...</p>
                      <p className="text-sm text-gray-400">Analisando nicho, criando anúncios e definindo público</p>
                    </div>
                    <Progress value={66} className="w-full" />
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Campanhas Ativas</p>
                      <p className="text-2xl font-bold text-white">{campaigns.filter(c => c.status === 'running').length}</p>
                    </div>
                    <Play className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Gasto Total</p>
                      <p className="text-2xl font-bold text-white">
                        R$ {campaigns.reduce((sum, c) => sum + c.spend, 0).toLocaleString()}
                      </p>
                    </div>
                    <DollarSign className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Conversões</p>
                      <p className="text-2xl font-bold text-white">
                        {campaigns.reduce((sum, c) => sum + c.conversions, 0)}
                      </p>
                    </div>
                    <Target className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">ROAS Médio</p>
                      <p className="text-2xl font-bold text-white">
                        {(campaigns.reduce((sum, c) => sum + c.roas, 0) / campaigns.length).toFixed(1)}x
                      </p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Suas Campanhas</h3>
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="bg-black/40 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{campaign.name}</h4>
                        <p className="text-sm text-gray-400">{campaign.niche} • {campaign.targetAudience}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${getStatusColor(campaign.status)} text-white`}>
                          {getStatusText(campaign.status)}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <Settings className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            {campaign.status === 'running' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-400">Impressões</p>
                        <p className="text-lg font-semibold text-white">{campaign.impressions.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-400">Cliques</p>
                        <p className="text-lg font-semibold text-white">{campaign.clicks.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-400">CTR</p>
                        <p className="text-lg font-semibold text-white">{campaign.ctr}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-400">CPC</p>
                        <p className="text-lg font-semibold text-white">R$ {campaign.cpc}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-400">Conversões</p>
                        <p className="text-lg font-semibold text-white">{campaign.conversions}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-400">ROAS</p>
                        <p className="text-lg font-semibold text-green-400">{campaign.roas}x</p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-medium">IA Insights:</span>
                      </div>
                      <p className="text-sm text-blue-200 mt-1">
                        {campaign.status === 'running' 
                          ? "Campanha performando bem. IA otimizando lances automaticamente."
                          : campaign.status === 'optimizing'
                          ? "IA detectou oportunidade de melhoria. Ajustando público-alvo e criativos."
                          : "Campanha pausada. Clique em play para reativar com otimizações da IA."
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    Performance Geral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Taxa de Conversão</span>
                      <span className="text-white font-semibold">4.89%</span>
                    </div>
                    <Progress value={48.9} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">CTR Médio</span>
                      <span className="text-white font-semibold">3.55%</span>
                    </div>
                    <Progress value={35.5} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">ROAS Médio</span>
                      <span className="text-green-400 font-semibold">4.0x</span>
                    </div>
                    <Progress value={80} className="w-full" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-blue-400" />
                    IA Automações Ativas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white">Otimização de Lances</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">Ativo</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white">Segmentação Dinâmica</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">Ativo</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-white">Criação de Anúncios</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">Ativo</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-white">Análise de Concorrentes</span>
                      </div>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">Processando</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Relatório de IA - Últimas 24h</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <h4 className="text-purple-300 font-medium mb-2">🤖 Otimizações Realizadas</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Ajustou lances em 12 palavras-chave para melhorar posicionamento</li>
                      <li>• Pausou 3 anúncios com baixo CTR e criou 2 variações otimizadas</li>
                      <li>• Expandiu público-alvo da campanha "E-commerce Fashion" em 15%</li>
                      <li>• Identificou novo horário de pico: 19h-21h com +23% de conversões</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <h4 className="text-green-300 font-medium mb-2">📈 Resultados Obtidos</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Aumento de 18% no CTR médio das campanhas</li>
                      <li>• Redução de 12% no CPC através de otimização de lances</li>
                      <li>• Melhoria de 25% na taxa de conversão</li>
                      <li>• Economia de R$ 340 em gastos desnecessários</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h4 className="text-blue-300 font-medium mb-2">🎯 Próximas Ações Planejadas</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Testar novos criativos baseados em tendências identificadas</li>
                      <li>• Implementar segmentação por dispositivo otimizada</li>
                      <li>• Expandir para novas plataformas com potencial identificado</li>
                      <li>• Ajustar orçamentos baseado em performance por horário</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}